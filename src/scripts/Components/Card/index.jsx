import './index.scss';
import React, { Component } from 'react';


export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      listTitle: 'Title 1',
      cards: [
        {
          featuredImage: 'https://images.unsplash.com/photo-1540538177612-3932008edf95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa7693baed74b3bdd8d66664e0e98f2&auto=format&fit=crop&w=1351&q=80',
          title: 'Linked List',
          description: 'Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. Bless up. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? They don’t want us to win. You should never complain, ',
          tags: ['tag 1', 'tag 2', 'tag 3'],
        },
        {
          featuredImage: 'https://images.unsplash.com/photo-1540538177612-3932008edf95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa7693baed74b3bdd8d66664e0e98f2&auto=format&fit=crop&w=1351&q=80',
          title: 'Linked List',
          description: 'Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. Bless up. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? They don’t want us to win. You should never complain, ',
          tags: ['tag 1', 'tag 2', 'tag 3'],
        },
        {
          featuredImage: 'https://images.unsplash.com/photo-1540538177612-3932008edf95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa7693baed74b3bdd8d66664e0e98f2&auto=format&fit=crop&w=1351&q=80',
          title: 'Linked List',
          description: 'Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. Bless up. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? They don’t want us to win. You should never complain, ',
          tags: ['tag 1', 'tag 2', 'tag 3'],
        },
      ],
    };
  }

  tagList(tags) {
    return tags.map(v => (
      <div className="tag-label">
        {v}
      </div>));
  }

  cardList() {
    const { cards } = this.state;

    return cards.map(v => (
      <div className="card">
        <img className="feature-image" src={v.featuredImage} alt="feature card" />
        <div className="title">
          {v.title}
        </div>
        <div className="description">
          {v.description}
        </div>
        <div className="alg-button">
          Visit Algorithm
        </div>
        <div className="tags-container">
          {this.tagList(v.tags)}
        </div>
      </div>
    ));
  }


  render() {
    const { listTitle } = this.state;
    return (
      <div className="card-container">
        <div className="card-container-title">
          {listTitle}
        </div>
        <div className="card-list">
          {this.cardList()}
        </div>
      </div>
    );
  }
}
