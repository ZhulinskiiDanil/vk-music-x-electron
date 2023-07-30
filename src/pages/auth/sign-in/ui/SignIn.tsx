import styles from './main.module.scss'

// Components
import { MainWrapper } from "@/processes/MainWrapper/ui/MainWrapper";
import { SignInForm } from "@/entities/Auth/SignIn/Form/ui/Form";

export default function SignIn() {
  return <MainWrapper className={styles.container}>
    <SignInForm />
  </MainWrapper>
}