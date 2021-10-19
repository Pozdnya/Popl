import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { fetchData } from '../../../../redux/Cards/actions'
import { CardClient } from '../CardClient/CardClient'

export const Cards = () => {
	const dispatch = useDispatch()
	const accounts = useSelector(state => state.cardReducer.cardData)
	const [characters, updateCharacters] = useState([])
	
	useEffect(() => { dispatch(fetchData()) }, [dispatch])

	//useEffect(() => { updateCharacters(accounts) }, [accounts])

	// const handleOnDraEnd = (result) => {
	// 	if (!result) return;
	// 	let items = [...characters]
	// 	const [reorderedItem] = items.splice(result.source.index, 1)
	// 	items.splice(result.destination.index, 0, reorderedItem)

	// 	updateCharacters(items)
	// }

	return (
		<div>
			{accounts.map((account)=>(
				<CardClient
				key={account.id}
				id={account.id}
				image={account.image}
				name={account.name}
				email={account.email}
				bio={account.bio}
				publicIcons={account.publicIcons}
				businessIcons={account.businessIcons}
				isPro={account.isPro}
				direct={account.direct}
				isPublic={account.isPublic} />
			))}
		</div>
	)
	
}




		// <div style={{ cursor: 'auto' }}>
		// 	<DragDropContext onDragEnd={handleOnDraEnd}>
		// 		<Droppable droppableId='accounts'>
		// 			{(provided) => (
		// 				<div className='accounts' {...provided.droppableProps} ref={provided.innerRef} >
						//	{accounts.map((account, index) =>
								// <Draggable key={account.id.toString()} draggableId={account.id.toString()} index={index}>
								// 	{(provided) => (
								// 		<div key={account.id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
											// <CardClient
											// 	key={account.id}
											// 	id={account.id}
											// 	image={account.image}
											// 	name={account.name}
											// 	email={account.email}
											// 	bio={account.bio}
											// 	publicIcons={account.publicIcons}
											// 	businessIcons={account.businessIcons}
											// 	isPro={account.isPro}
											// 	direct={account.direct}
											// 	isPublic={account.isPublic} />
										// </div>
									// )}

								// </Draggable>
							// )}
		// 					{provided.placeholder}
		// 				</div>)}
		// 		</Droppable>
		// 	</DragDropContext>
		// </div>

//}

