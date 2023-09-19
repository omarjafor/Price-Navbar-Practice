import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 p-2 hover:rounded-xl hover:bg-green-800 hover:text-white">
                <a href={route.path}> {route.name} </a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;