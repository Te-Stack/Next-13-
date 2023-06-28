import Link from "next/link"
import {Suspense} from "react"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"

const Repopage = ({params: {name}}) =>{
    return (
        <div className="card">
            <Link className="btn btn-back" href="/code/repos">Back to Respositories</Link>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name = {name} />
            </Suspense>
            <Suspense fallback={<div>Loading directories</div>}>
            <RepoDirs name={name} />
            </Suspense>
            
            
        </div>
    )

}

export default Repopage;