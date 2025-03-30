export const handleCheckout = async (body: any)=>{
    // debugger
    const res = await fetch('/api/checkout',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    const result = await res.json()
console.log('jugnu00',result)
    return result.session_url
} 