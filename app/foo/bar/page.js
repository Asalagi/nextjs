import Link from 'next/link';

export default function Page() {
    return (
    <div>
        <h1>Hello, Next.js!</h1>
        <Link href="/foo">Back to Foo</Link> <br/>
        <Link href="/">Home</Link>
    </div>
    )
}

