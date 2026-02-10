import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CompanyLogoProps {
  company: string
  size?: 'sm' | 'md' | 'lg'
  grayscale?: boolean
  className?: string
}

const sizeMap = {
  sm: 40,
  md: 60,
  lg: 80,
}

const companyLogoMap: Record<string, string> = {
  'TechFlow Solutions': 'techflow-solutions.svg',
  'GlobalTrade Enterprises': 'globaltrade-enterprises.svg',
  'Horizon Manufacturing': 'horizon-manufacturing.svg',
  'Apex Construction Group': 'apex-construction.svg',
  'Evergreen Hospitality': 'evergreen-hospitality.svg',
  'MedCore Healthcare': 'medcore-healthcare.svg',
}

export default function CompanyLogo({
  company,
  size = 'md',
  grayscale = false,
  className
}: CompanyLogoProps) {
  const logoFile = companyLogoMap[company]

  if (!logoFile) {
    // Fallback: show company initials if logo not found
    const initials = company
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-lg font-bold text-surface-900 dark:text-white',
          size === 'sm' && 'w-10 h-10 text-sm',
          size === 'md' && 'w-[60px] h-[60px] text-lg',
          size === 'lg' && 'w-20 h-20 text-xl',
          className
        )}
      >
        {initials}
      </div>
    )
  }

  const dimension = sizeMap[size]

  return (
    <div className={cn('relative', className)}>
      <Image
        src={`/logos/companies/${logoFile}`}
        alt={`${company} logo`}
        width={dimension}
        height={dimension}
        className={cn(
          'object-contain transition-all duration-300',
          grayscale && 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
        )}
        loading="lazy"
        quality={90}
      />
    </div>
  )
}
