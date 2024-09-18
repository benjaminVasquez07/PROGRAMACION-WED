import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> { //el useeffect nos permite ejecutar el codigo que se encuentre adentro , en el caso de no recibir depencia entre los corchetes el useeffec se ejecutara solamente para cuando inicie la aplicacion
    const getSession = async() => {
      const { data,error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      };
    }
    
  getSession();
},[])
const handleClick = async () => {
  const {date,error} = supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    console.log(error);
  } else
  console.log(data);
};
return (
  <>
  <header>
    este el header
    <button onClick={handleClick}>conectar con GitHub</button>
  </header>
  </>
)
}