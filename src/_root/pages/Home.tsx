import { Models } from "appwrite";

// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";


function Home() {
  return (
    <section>
      <img src="/public/assets/images/slide-home.png" alt="slide"
      className="w-full block mt-10 object-cover"
      />
    </section>
  )
}

export default Home