import { useSignal } from "@preact/signals";
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts";
import Axios from "npm:axios"

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown,string>) => {
        const {id}= ctx.params;
        const response = await Axios.get<string>(`https://filmquotes.deno.dev/${id}`)
        return ctx.render(response.data)
    }
}
  const Page = (props: PageProps<string>) => {
    return(
        <body class= "principal">
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
    <p class="color-typing-animation">{props.data}</p>
        <a href={"/pag1/virus"}><button class="pulsor"></button> </a>
        <div class= "heavy"></div>
        <div class= "shrek"></div>
        <div class= "calamardo"></div>
        <div class= "cuadrado"></div>
        <div class="tiburon"></div>
        <div class= "box"></div>
        <div class= " container"></div>
        <div class= " container2"></div>
        <div class="basket"></div>
        <div class="basketball"></div>
      </div>
      </body>

  );
}
export default Page;