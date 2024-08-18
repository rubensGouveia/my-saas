'use client'
import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormStateCustom } from '@/hooks/use-form-state-custom'

import { signUpWithEmailAndPassword } from './action'

export function SignUpForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [{ success, message, errors }, handleSubmit, isPending] =
    useFormStateCustom(signUpWithEmailAndPassword, () => {
      router.push('/auth/sign-in')
    })

  const org = searchParams.get('org')
  const referralCode = searchParams.get('referralCode')

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Erro ao criar conta</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <Label htmlFor="name">Nome</Label>
        <Input name="name" id="name" type="text"></Input>
        {errors?.name && (
          <p className="dark:red-400 text-xs font-medium text-red-500">
            {errors.name[0]}
          </p>
        )}
      </div>

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
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirmar Senha</Label>
        <Input
          name="password_confirmation"
          id="password_confirmation"
          type="password"
        ></Input>
        {errors?.password_confirmation && (
          <p className="dark:red-400 text-xs font-medium text-red-500">
            {errors?.password_confirmation[0]}
          </p>
        )}
      </div>
      {org && (
        <Input
          className="hidden"
          name="org"
          id="org"
          defaultValue={org}
        ></Input>
      )}

      {referralCode && (
        <Input
          className="hidden"
          name="referralCode"
          id="referralCode"
          defaultValue={referralCode}
        ></Input>
      )}

      <Button className="w-full" type="submit">
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Cadastrar conta'
        )}
      </Button>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/sign-in">Já tenho uma conta</Link>
      </Button>
    </form>
  )
}
