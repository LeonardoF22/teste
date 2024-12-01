import Link from 'next/link'

function Home(){
    return (<div>
        <h4>Página Home</h4>
        <Link href="/sobre">
            <a>Acessar página sobre</a>
        </Link>
    </div>)
}

export default Home