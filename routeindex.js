const express = require('express');
const router = express.Router();

let posts = [];
let nextId = 1;

router.get('/', (req,res) => {
	res.render('index', {posts:posts});
});

router.get('/posts/:id/edit', (req,res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(function(p) {
		return p.id === id;
	});
	res.render('edit', {post:post});
});

router.post('/posts', (req,res) => {
	const title = req.body.title;
	const content = req.body.content;
	const creator = req.body.creator;
	const date = new Date();

	const newPost = {
		id: nextId,
		title: title,
		content: content,
		creator: creator,
		date: date
	};
	posts.push(newPost);
	nextId++;
	res.redirect('/');
});

router.post('/posts/:id/edit', (req,res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(function(p) {
		return p.id === id;
	});
	post.title = req.body.title;
	post.content = req.body.content;
	post.creator = req.body.creator;
	res.redirect('/');
});

router.post('/posts/:id/delete', (req,res) => {
	const id=parseInt(req.params.id);
	posts = posts.filter(function(p) {
		return p.id !== id;
	});
	res.redirect('/');
});

module.exports = router;