import { useTranslation } from 'react-i18next'

export function WelcomeStep() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <div className="text-[40px] mb-2">🎙</div>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          {t('onboarding.speakToWrite')}
        </p>
      </div>
    </div>
  )
}
