import React, { Component, Fragment } from 'react'
import { useState, useContext } from 'react'
import styled, { css } from 'styled-components'


function TaskListDropdown() {
    
    const Button = styled.button`
        background: transparent;
        font-size: 1em;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 2em;
        padding: 0.25em 1em;

        ${props =>
        props.primary &&
        css`
        background: palevioletred;
        color: white;
    `};
  `

    const Container = styled.div`
        text-align: center;
        `



    return(
        <Container>
        <h1>Task List</h1>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        </Container>
    )

}

export default TaskListDropdown;