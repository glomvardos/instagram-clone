export default function AppButtons() {
  return (
    <div className='flex'>
      <a
        className='mr-2'
        href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
        target='_blank'
      >
        <img src='/images/app-store.png' alt='Available on the App Store' width='140' />
      </a>
      <a
        href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB2D5EA2F-B787-41A3-845B-E352A4FB71DB%26utm_content%3Dlo%26utm_medium%3Dbadge'
        target='_blank'
      >
        <img src='/images/google-play.png' alt='Available on Google Play' width='140' />
      </a>
    </div>
  )
}
