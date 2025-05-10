import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatedGradientBackground />
      <div className="z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">
            ContentSphere
          </h1>
          <p className="text-gray-400">Create a new password</p>
        </div>
        <ResetPasswordForm />
      </div>
    </div>
  )
}
