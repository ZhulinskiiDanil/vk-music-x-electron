import styles from './main.module.scss'
import { ApiInstance } from '@/app/api'

// Hooks
import { ChangeEvent, FormEvent, useState } from 'react'
import { SignInResponse } from '@/app/api/auth/slice'

type CaptchaResponse = Omit<NonNullable<SignInResponse>, "user_id" | "access_token" | "expires_in"> & { result: string }

export function SignInForm() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState<false | CaptchaResponse>(false)
  const [error, setError] = useState("")

  function changeLogin(e: ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value)
  }

  function changePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function changeCaptcha(e: ChangeEvent<HTMLInputElement>) {
    setCaptcha(pre => !!pre && ({
      ...pre, result: e.target.value
    }))
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    let response = null
    setError("")

    setLoading(true)
    try {
      response = await ApiInstance.auth.signin(Object.assign({
        username: login,
        password: password
      }, captcha ? {
        captcha_sid: captcha.captcha_sid,
        captcha_key: captcha.result
      } : {}))
    } catch(e) {
      const err = String(e).toLowerCase()
      const failedToFetch = err.includes("fetch failed")
      
      if (failedToFetch) {
        setError("Запрос заблокирован, попробуйте позже.")
      }
    }
    setCaptcha(false)
    setLoading(false)
    
    if (response) {
      if (response?.error === "need_captcha") {
        setCaptcha({ ...response, result: "" })
        setError("Требуется решить капчу")
      } else if (response?.error === "invalid_client") {
        setError("Неверный логин или пароль.")
      } else if (response?.access_token) {
        window.location.hash = "#/"
      }
    }
  }

  return <form onSubmit={submit} className={styles.form}>
    <img
      className={styles.image}
      src="/public/images/VK logo White.svg"
      alt="VK Logo"
    />
    <h1 className={styles.title}>
      Вход в аккаунт
    </h1>
    <Input
      type='text'
      placeholder='Логин'
      value={login}
      onChange={changeLogin}
    />
    <Input
      type='password'
      placeholder='Пароль'
      value={password}
      onChange={changePassword}
    />
    {captcha && (<>
      <img
        className={styles.captcha_image}
        src={captcha.captcha_img}
        alt='Captcha'
      />
      <Input
        type='text'
        placeholder='Результат'
        value={captcha.result}
        onChange={changeCaptcha}
      />
    </>)}
    {error && <div className={styles.error}>
      { error }
    </div>}
    <Input
      type='submit'
      value='Подтвердить'
      disabled={loading}
    />
  </form>
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input
    type="text"
    className={styles.input}
    {...props}
  />
}