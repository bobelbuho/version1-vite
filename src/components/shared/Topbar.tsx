import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Topbar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount();

    useEffect

  return (
    <section className='topbar'>
        <div className='flex between py-4 px-5'>
            <Link to='/' className="flex gap-3 items-center">
                <img 
                src="/assets/images/logo.svg"
                alt="logo"
                width={130}
                height={325}
                />
            </Link>

            <div className="flex gap-4">
            <Button variant="ghost" className="shad-button_ghost">
                    <img src="/assets/icon/search.png" width={24} height={24}/>
                </Button>

                <Button variant="ghost" className="shad-button_ghost">
                    <img src="/assets/icon/post.png" 
                    width={24}
                    height={24} />
                </Button>


                <Button variant="ghost" className="shad-button_ghost"
                onClick={() => signOut()}>
                    <img src="/assets/icon/profil.png" 
                    width={24}
                    height={24} />
                </Button>

            </div>

        </div>

    </section>
  )
}

export default Topbar