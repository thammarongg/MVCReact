var HelloWorld = React.createClass({
    render: function () {
        return (
            <h2>Hello {this.props.name}</h2>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            data: ''
        };
    },

    componentWillMount: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:61230/Home/GetMessage', true);
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                data: response.result
            });
        }.bind(this);
        xhr.send();
    },

    render: function () {
        return (
            <h1>{this.state.data}</h1>
            );
    }
});


React.render(
    <App />,
    document.getElementById('container')
    );
