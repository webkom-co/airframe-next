import React from 'react';
import fetch from 'cross-fetch';
import AsyncSelect from 'react-select/lib/Async';

const QUERY_URL_BASE = 'https://api.github.com/search/users';

const GithubUserOption = ({innerProps, data}) => {
    const { avatar_url, login } = data;

    return (
        <a className="d-flex px-2 py-1" {...innerProps} href="javascript:;">
            <img src={ avatar_url } height="20" className="mr-3"/>
            <span>{ login }</span>
        </a>
    );
};

const GithubUserSingleValue = ({innerProps, data}) => {
    const { avatar_url, login } = data;

    return (
        <a className="d-flex px-2 py-1" {...innerProps} href="javascript:;">
            <img src={ avatar_url } height="20" className="mr-3"/>
            <span>{ login }</span>
        </a>
    );
};

export class Async extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedUserId: null
        }    
    }

    async fetchUsers(inputValue) {
        if (!inputValue) {
            return [];
        }

        const users = await fetch(`${QUERY_URL_BASE}?q=${inputValue}`)
            .then((response) => response.json())
            .then(response => response.items);

        return users;
    }

    handleChange(user) {
        this.setState({ selectedUser: user })
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={this.fetchUsers}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.selectedUser}
                    components={{
                        Option: GithubUserOption,
                        SingleValue: GithubUserSingleValue
                    }}
                />
            </div>
        )
    }
}
