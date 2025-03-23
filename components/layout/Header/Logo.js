import Link from 'next/link'

export default function Logo() {
    return (
        <>
            <div className="logo">
                <Link href="/">
                  <p>
                    JGD
                  </p>
                </Link>
            </div>
        </>
    )
}