var React = require('react');
var ListItem = React.createClass({
   render:function(){
     return(
       <li>
          <h1>{this.props.ingredients}</h1>
       </li>
     );
   }
});
module.exports = ListItem;
