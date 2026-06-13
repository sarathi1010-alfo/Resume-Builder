import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const title = searchParams.get('title')?.slice(0, 100) || 'Resume Forge';
    const description = searchParams.get('description')?.slice(0, 150) || 'Create an ATS-friendly resume that stands out';
    const type = searchParams.get('type') || 'website';
    const category = searchParams.get('category');

    // Static Branding
    const siteName = 'Resume Forge';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#fff',
            backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'auto',
            }}
          >
            <div
              style={{
                background: '#4F46E5', // Primary indigo
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: '-0.05em',
                display: 'flex',
              }}
            >
              {siteName}
            </div>

            {category && (
               <div style={{ marginLeft: 20, fontSize: 32, color: '#64748b', display: 'flex' }}>
                 / {category}
               </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '900px',
            }}
          >
             <div
               style={{
                  fontSize: type === 'article' ? 64 : 72,
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  display: 'flex',
               }}
             >
                {title}
             </div>
             {description && (
               <div style={{ fontSize: 32, color: '#475569', lineHeight: 1.4, display: 'flex' }}>
                 {description}
               </div>
             )}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 24, background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', fontWeight: 'bold', fontSize: 24 }}>A</div>
                <div style={{ fontSize: 24, color: '#334155', fontWeight: 600, display: 'flex' }}>alfo.online</div>
             </div>
             <div style={{ fontSize: 24, color: '#94a3b8', display: 'flex' }}>
                resumeforge.alfo.online
             </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const error = e as Error;
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}