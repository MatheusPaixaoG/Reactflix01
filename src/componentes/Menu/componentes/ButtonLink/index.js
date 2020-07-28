<<<<<<< HEAD
import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/" }

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

=======
import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/" }

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

>>>>>>> fee2e38535e61e329aa2e65d554cd14c4a1ad01b
export default ButtonLink;