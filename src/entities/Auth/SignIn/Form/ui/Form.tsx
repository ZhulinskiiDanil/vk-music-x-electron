import styles from './main.module.scss'
import { ApiInstance } from '@/app/api'
import { SignInResponse } from '@/app/api/auth/slice'

// Hooks
import useCookies from 'react-cookie/cjs/useCookies'
import { ChangeEvent, FormEvent, useState } from 'react'

type CaptchaResponse = Omit<NonNullable<SignInResponse>, "user_id" | "access_token" | "expires_in"> & { result: string }

export function SignInForm(props: any) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState<false | CaptchaResponse>(false)
  const [cookies, setCookie] = useCookies(['token']);
  
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  
  function setToken(token: string) {
    setCookie('token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
  }
  
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
    
    // DEBUG WHILE FOR 2FA IS NOT SUPPORTED
    console.log(response);
    
    if (response) {
      switch (response?.error) {
        case "need_captcha": {
          setCaptcha({ ...response, result: "" })
          setError("Требуется решить капчу")

          break;
        }
        case "invalid_client": {
          setError("Неверный логин или пароль.")

          break;
        }
        case "need_validation": {
          if (response?.ban_info) {
            const user = response.ban_info.member_name
            setError(`Пользователь ${user} находится в бане.`)
          }

          break;
        }
        default: {
          if (response?.access_token) {
            setToken(response.access_token)

            window.location.hash = "#/"
          } else {
            setError(`Неизвестная ошибка, возможно пользователь находится в бане.`)
          }
        }
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
      value='Продолжить'
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