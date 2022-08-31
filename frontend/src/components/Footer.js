import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* Wrights Designs */}
						<a
							rel='noopener noreferrer'
							href='https://github.com/j0nnyboi'
							target='_blank'
							className='j0nnyboi'
						>
							<i className='fas fa-user-circle'></i> Wrights Designs 
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
