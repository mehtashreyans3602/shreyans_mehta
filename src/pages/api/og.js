import { ImageResponse } from '@vercel/og'

// NOTE: Edge runtime is intentionally NOT used here.
// @vercel/og internally uses WebAssembly.compile / dynamic code evaluation,
// which the Edge Runtime forbids. Running on the default Node.js runtime
// avoids the "Dynamic Code Evaluation not allowed in Edge Runtime" build error.
export const config = {
    unstable_allowDynamic: [
        '**/node_modules/@vercel/og/**',
        '**/node_modules/next/dist/compiled/@vercel/og/**',
    ],
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
                    Shreyans Mehta
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