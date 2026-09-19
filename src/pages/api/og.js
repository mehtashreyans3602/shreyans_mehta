import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'edge',
}

export default function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#111827',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 700,
                    }}
                >
                    Your Name
                </div>

                <div
                    style={{
                        fontSize: 32,
                        marginTop: 20,
                        color: '#9CA3AF',
                    }}
                >
                    Full Stack Developer
                </div>

                <div
                    style={{
                        fontSize: 24,
                        marginTop: 40,
                    }}
                >
                    React • Next.js • TypeScript • Node.js
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}