import{F as e}from"./Form-be9580cb.js";import{u as r}from"./useForm-6ab72f3c.js";import{u as a}from"./useValidator-3f79ae4e.js";import{d as t,q as s,V as o,o as m,i,a as u}from"./index-10360f2b.js";const n=t({__name:"Write",props:{currentRow:{type:Object,default:()=>{}},formSchema:{type:Array,default:()=>[]}},setup(t,{expose:n}){const c=t,{required:l}=a(),p=s({username:[l()],account:[l()],"department.id":[l()],role:[l()],email:[l()],createTime:[l()]}),{formRegister:d,formMethods:f}=r(),{setValues:h,getFormData:j,getElFormExpose:g}=f;return o((()=>c.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await g();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await j()}}}),(r,a)=>(m(),i(u(e),{rules:p,onRegister:u(d),schema:t.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};
