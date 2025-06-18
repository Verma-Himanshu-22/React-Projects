import { useState } from "react";
import Button from "./Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  const [name, setname] = useState("Himanshu")
  const [email, setemail] = useState("hv11072004@gmail.com")
  const [text, settext] = useState("This is the text from the form element")

  const onSubmit=(event)=>{
       event.preventDefault()
       setname(event.target[0].value)
       setemail(event.target[1].value)
       settext(event.target[2].value)
       console.log(
         name,email,text
       )
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
         
        </div>
        <Button
          isSecBtn={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text"rows={8}/>
          </div>
          <div style={{
           display:"flex",
           justifyContent:"end"

          }}>

           <Button text="SUBMIT"/>
          </div>
          <div>
             { name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service.svg" alt="Services" />
      </div>
    </section>
  );
};

export default ContactForm;
