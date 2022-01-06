/*
<div className='textfield_modern'>
                            <label className=''>Nickname</label>
                            <input className='become_a_booster_textfield' />
                            </div>
                             */
import React from 'react';

class ModernTextField extends React.Component {
    constructor(props) {
        super(props);
        
    }

    ClickedInput(data) {
        
    }

    render() {
        return (
            <div className='textfield_modern'>
                <label className='modernLabel'>{this.props.label}</label>
                <input onClick={this.ClickedInput} className='modernInput' />
            </div>
        );
    }
}

export default ModernTextField;