import { useTranslation } from 'react-i18next'
import { APP_NAME, APP_VERSION } from '../../lib/constants'

export function AboutPane() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 text-[13px]">
      {/* Header */}
      <div className="text-center py-6">
        <h2 className="text-[22px] font-semibold text-text-primary">{APP_NAME}</h2>
        <p className="text-text-secondary mt-1 text-[13px]">{APP_VERSION}</p>
      </div>

      <p className="text-text-secondary leading-relaxed">{t('settings.aboutDescription')}</p>
    </div>
  )
}
