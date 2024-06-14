import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { pathBreadcrumbPair } from '@/app/model/breadcrumbConfig'

export default function AppBreadCrumb() {
  const router = useRouter()
  // const path = router.pathname;
  const path = usePathname()
  const breadcrumbs = pathBreadcrumbPair[path].breadcrumbs

  return (
    <Breadcrumb style={{ margin: '0 16px', padding: 16 }}>
      <Breadcrumb.Item key={'CMS SYSTEM'}>
        <Link href="/dashboard">CMS SYSTEM</Link>
      </Breadcrumb.Item>
      {breadcrumbs.map((item, index) => (
        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
