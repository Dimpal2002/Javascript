import React, { useContext, createContext, useState } from 'react'

const ThemeContext = createContext();
const UserContext = createContext();

function MultiContext() {

    const[theme,setTheme] = useState("light")

    const[user,setUser] = useState("");
  return (
    <div>
        <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={{user,setUser}}>
        <Greet/>
        <Welcome>
        <Panel title="welcome">
            <LoginForm/>
        </Panel>
        </Welcome>
        
        </UserContext.Provider>
        </ThemeContext.Provider>

        <input type='checkbox' onChange={(e)=>{setTheme((e.target.checked)?"dark":"light");}}/>
        {theme}
    </div>
  )
}

function Welcome({children}){
    return(
        <>
        {children}
        </>
    )
}

function Greet(){
    const {user} = useContext(UserContext);
    return(
        <>
        <h1>{user.name}</h1>
        </>
    )
}

function Panel({children,title}){

    const theme = useContext(ThemeContext);
    console.log(theme)

    const xyz = "panel-" + theme;

    return(       
           <section className={xyz}>
                <h1>{title}</h1>
                {children}
            </section>  
    )
}

function LoginForm()
{
    const{setUser} = useContext(UserContext)

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")

    const canLogin = fname!=="" && lname!==""
    return(
        <>
        <div>
            <label>Firstname:</label>
            <input type='text' name='' value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
        </div>

        <div>
            <label>Lastname:</label>
            <input type='text' name='' value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
        </div>

        <Button disabled={!canLogin}  // disabled is prop
    onclick={()=>{
            setUser({  
                    name:fname + " " + lname
                });
        }}
        >Login
        </Button>
        </>
    );
}
// button ne children through lavva mate button ne alag component ma banayu ane Loginform ma call karai didhu
function Button({children,disabled,onclick}){ //prop
    return(
        <>
            <div>
                <button disabled={disabled} onClick={onclick}>{children}</button> {/*button ni andarno data children prop through lavva mate*/}
            </div>
        </>
    )
}

export default MultiContext
