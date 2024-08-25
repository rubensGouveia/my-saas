'use client'
import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormStateCustom } from '@/hooks/use-form-state-custom'

import { signInWithEmailAndPassword } from './action'

export function SignInForm() {
  const router = useRouter()
  const [{ success, message, errors }, handleSubmit, isPending] =
    useFormStateCustom(signInWithEmailAndPassword, () => {
      console.log('redirecting...')
      // router.push('/')
    })
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Erro ao logar</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" type="email"></Input>
        {errors?.email && (
          <p className="dark:red-400 text-xs font-medium text-red-500">
            {errors.email[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Senha</Label>
        <Input name="password" id="password" type="password"></Input>

        {errors?.password && (
          <p className="dark:red-400 text-xs font-medium text-red-500">
            {errors.password[0]}
          </p>
        )}
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Esqueci minha senha
        </Link>
      </div>

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Entrar com email'
        )}
      </Button>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/sign-up">Criar nova conta</Link>
      </Button>
    </form>
  )
}
