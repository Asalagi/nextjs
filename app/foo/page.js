import Link from 'next/link';

function Page() {
    return (
    <div>
        <h1>The is the foo page</h1> 
        <Link href="/foo/bar">Bar</Link><br/>
        <Link href="/">Home</Link>
    </div>
    )
}

export default Page;