import Query from '@/components/query/Index'

export default async function Queries({searchParams}) {
    let result = { code: -1, data:{} }
    const { query } = searchParams

    const hasQuery = query && query.trim()!=='';

    if( hasQuery  ) {
        const response = await fetch(`${process.env.API_URL}/query/${query}`, { cache:'force-cache' })
        result = await response.json();
    }

    const getErrorMessage = (code) => {
        if( code === 0 ) return ""
        if( code === -1 ) return ""
        if( code === 1 ) return "Registro no encontrado"
    }
    


    return (
        <main className="flex min-h-screen flex-col bg-slate-200">
            <Query data={ result.code===0 ? result?.data : {}} error={ getErrorMessage(result.code )}/>
        </main>
    )
}