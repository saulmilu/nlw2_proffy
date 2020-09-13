import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";


const useStyles = makeStyles((theme : Theme)=>
  createStyles(
    {
      root : {
        width: '100%',
        borderWidth: 0,
        backgroundColor : '#fff',
        fontSize: '1.7rem',
        color :'#9C98A6',
        borderTopLeftRadius : '10px',
        borderTopRightRadius : '10px',
        marginTop :'2px'
      },
      root_2 : {
        width: '100%',
        borderWidth: 0,
        backgroundColor : '#fff',
        fontSize: '1.7rem',
        color :'#9C98A6',
        marginTop :'2px'
      },
      root_3 : {
        width: '100%',
        borderWidth: 0,
        backgroundColor : '#fff',
        fontSize: '1.7rem',
        color :'#9C98A6',
        marginTop :'2px',
        borderBottomLeftRadius : '10px',
        borderBottomRightRadius : '10px'
      },
      label : {
        width: '100%',
        paddingTop: '1rem',
        paddingLeft : '1rem',
        borderWidth: 0,
        backgroundColor : '#fff',
        borderRadius : '10px',
        fontSize: '1.7rem',
        color :'#9C98A6'
      },
      label_2 : {
        width: '100%',
        paddingTop: '1rem',
        paddingLeft : '1rem',
        borderWidth: 0,
        backgroundColor : '#fff',
        fontSize: '1.7rem',
        color :'#9C98A6'
      },
      controlLabel : {
        width: '100%',
        fontSize: '1.7rem',
        color :'#9C98A6'
      },
      input :{
        fontSize: '1.7rem',
        color :'#9C98A6',
        borderRadius : '10px',
        paddingBottom: '1rem',
        paddingLeft : '1rem',
        paddingTop: '0.5rem',
      },
      animate : {
        color :'#9C98A6',
        borderColor : '#9c98a6',
      },
      total : {
        marginTop: '2px',
        fontSize: '1.7rem',
      },
      outline :{
        borderColor : '#9c98a6'
      },
      inputCheckbox:{
        height : '100%',
        width : '100%',
      },
      inputCheckboxRoot:{
        color: '#9c98a6',
        backgroundColor : '#9c98a6' 
      },
      inputCheckboxChecked : {
        color: '#04D361',
      },
      rootC: {
        color: green[400],
        fontSize : '1.7rem',
        '&$checked': {
          color: green[600],
          fontSize : '1.7rem',
        },
      },
      checked: {},

      buttonAble :{
        width : '100%',
        fontSize : '1.7rem',
        fontWeight: 700,
        backgroundColor : '#04d361',
        color : '#F0F0F7',
        height : '7rem',
        borderRadius : '10px'
      },

      
    }
  )
)

export default useStyles