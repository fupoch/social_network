import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import {Navigate} from "react-router-dom"
import { Field,reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControl/FormsControls";
import ItemDialog from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import { initialStateType } from "../../redux/messageReducer";
import { useFormik } from "formik";


type PropsType = {
  messagePage: initialStateType
  sendMessage: (newMessageBody: string) => void
  isAuth: boolean
  
}

const Dialogs: React.FC<PropsType> = (props: PropsType) => {

  let dialogsElements = props.messagePage.dialogs.map( d => 
    <ItemDialog name={d.name} id={d.id} key={d.id} />
  )
  let messageElements = props.messagePage.messages.map(m => <Message message={m.message} key={m.id}/>)
  
  let addNewMessage = (values:  {newMessageBody: string}) => {
    props.sendMessage(values.newMessageBody)
  }

 if (!props.isAuth) {
   return <Navigate  to={"/login"}/>
 }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
       {dialogsElements}
      </div>
      <div className={s.dialogWindow}>
        <div className={s.messages}>
        {messageElements}
        </div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
// const maxLength50 = maxLengthCreator(50)

// const AddMessageForm = (props) => {

//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div className={s.textArea}>
//           <Field component={Textarea} validate={[required, maxLength50 ]}name="newMessageBody"
//           placeholder="Введите сообщение"/>
          
//         <div className={s.buttonSend}>
//         <Button onClick={props.handleSubmit} variant="contained" endIcon={<SendIcon />}>
//           Send
//         </Button>
//         </div>
//       </div>
      
//     </form>
//   )
// }

const AddMessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newMessageBody: '',
    },
    onSubmit: values => {
      props.onSubmit(values)
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className={s.textArea}>
        <TextField
          
          id="newMessageBody"
          name="newMessageBody"
          label="Введите "
          value={formik.values.newMessageBody}
          onChange={formik.handleChange}
          error={formik.touched.newMessageBody && Boolean(formik.errors.newMessageBody)}
        />
        
        <div className={s.buttonSend}>
        <Button color="primary" variant="contained" type="submit">
          Send
        </Button>
        </div>
        </div>
      </form>
    </div>
  );
};

// const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs