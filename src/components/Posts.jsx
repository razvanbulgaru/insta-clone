import React from 'react';
import Post from './Post';

const Posts = () => {
	const posts = [
		{
			id: '1',
			username: 'dafasfaf',
			userImg:
				'https://media.licdn.com/dms/image/C4E03AQHkdBvprGDBBw/profile-displayphoto-shrink_800_800/0/1622011196095?e=2147483647&v=beta&t=Ey11EN9bSLaWodByp9757mbYfvpoSX-Pc5MQpi998yo',
			img: 'https://images.unsplash.com/photo-1692751202049-63fffe8d8738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
			caption: 'Nice ass bike',
		},
		{
			id: '2',
			username: 'rtyertye',
			userImg:
				'https://media.licdn.com/dms/image/C4E03AQHkdBvprGDBBw/profile-displayphoto-shrink_800_800/0/1622011196095?e=2147483647&v=beta&t=Ey11EN9bSLaWodByp9757mbYfvpoSX-Pc5MQpi998yo',
			img: 'https://images.unsplash.com/photo-1692842717708-e1bd69613afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
			caption: 'Contemplating life...',
		},
	];
	return (
		<div>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
};

export default Posts;
