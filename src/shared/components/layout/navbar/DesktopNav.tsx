import { Link } from 'react-router';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';
import { AuthButton } from '@/shared/components/ui/NavBarActions';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

interface DesktopNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: (href: string) => string;
  pathname: string;
}

export function DesktopNav({
  navItems,
  handleIsActive,
  pathname,
}: DesktopNavProps) {
  const user = useAuthStore((s) => s.user);
  return (
    <nav className="flex flex-1 items-center justify-end gap-10">
      <ul className="flex gap-4 font-label text-xl font-semibold">
        {navItems.map(({ text, href }) => {
          if (href.includes('my-list') && !user?.id) return;
          return (
            <li key={href} className="whitespace-nowrap">
              <Link className={handleIsActive(href)} to={href}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <AuthButton pathname={pathname} />
      </div>
    </nav>
  );
}
