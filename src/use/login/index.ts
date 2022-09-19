import { ref, Ref } from 'vue'
import { user_login } from '../../api'
import md5 from 'js-md5'
import { useRouter } from 'vue-router'
export default function useLogin() {
    const username: Ref<string> = ref('')
    const password: Ref<string> = ref('')
    const router = useRouter()
    const onSubmit = () => {
        user_login({
            username: username.value,
            password: md5(password.value)
        }).then(async (res) => {
            sessionStorage.setItem('user', JSON.stringify(res))
            await router.push('/')
        })
    }
    return { username, password, onSubmit }
}
