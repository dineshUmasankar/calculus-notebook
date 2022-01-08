import React from 'react';
import './App.css';
import Subject from './components/CalcSubject';
import Math from './components/MathArea';

function App() {
	return (
		<div className='App'>
			<header>
				<title>Calculus Sheet</title>
				<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' rel='stylesheet' />
			</header>
			<body className='App-body'>
				<div className='App-header'>
					Calculus <em>Notebook</em>
				</div>
				<div className='Subject-body'>
					<Subject subjectName='Fundamental Theorem of Calculus'>
						<h3>Part 1</h3>
						<Math formula='\frac{d}{dx}\int_a^xf\left(t\right)dt = f\left(x\right)' />
						<p>
							Start with a continuous function f and we define a new function for the area under the curve
							y = f(t):
						</p>
						<Math formula='F\left(x\right) = \int_a^xf\left(t\right)dt' />
						<p>The derivative of F is f, F is an integral of f.</p>
						<h3>Part 2</h3>
						<Math formula='\int_a^bf\left(x\right)dx = F\left(b\right)-F\left(a\right)' />
						<p>Direct instructions regarding how to calculate area under the curve.</p>
						<p>Useful when only given a table of values.</p>
					</Subject>
					<Subject subjectName='Mean Value Theorem' subjectDesc=''>
						<p>1. f is continous over the closed interval [a,b]</p>
						<p>2. f is differentiable over the open interval (a,b)</p>
						<p>Then there exists a number C in (a,b).</p>
						<Math formula='f\prime\left(c\right) = \frac{f(b)-f(a)}{b-a}' />
						<p>
							The line connecting the endpoints (the secant line) will be parallel to at least one of the
							function's tangent lines
						</p>

						<h3>Steps</h3>
						<p>
							1. Find the slope of the secant line, by solving for m (slope) through values from the
							interval provided
						</p>
						<p>2. Find f'(x)</p>
						<p>3. Set f'(x) = m. (Slope from Step #1)</p>
						<p>
							MVT gurantees that solutions from Step #3 are in-between the interval provided by the
							problem.
						</p>
					</Subject>
					<Subject subjectName='Extreme Value Theorem'>
						<p>1. f is continous over the closed interval [a,b]</p>
						<p>
							Then there will be an absolute maximum value of f and absolute minimum value of f over [a,b]{' '}
						</p>
						<h3>Steps</h3>
						<p>1. Find Critical Points in the given interval </p>
						<p>2. Evaluate the function at critical points / endpoints of the interval</p>
						<p>3. The largest function value from the previous step is max value; Smallest is min value.</p>
					</Subject>
					<Subject subjectName='Riemann Sum'>
						<table>
							<tr>
								<td>Direction</td>
								<td>Left Riemann Sum</td>
								<td>Right Riemann Sum</td>
							</tr>
							<tr>
								<td>Increasing</td>
								<td>Underestimation</td>
								<td>Overestimation</td>
							</tr>
							<tr>
								<td>Decreasing</td>
								<td>Overestimation</td>
								<td>Underestimation</td>
							</tr>
						</table>
					</Subject>
					<Subject subjectName='Volumes Using Cross Sections'>
						<Math formula='V = \int_a^bA\left(x\right)dx' />
					</Subject>
					<Subject subjectName='Disk and Washer Methods'>
						<h3>Disk Formula</h3>
						<Math formula='V = \pi\int_a^bR^2dx' />
						<h3>Washer Formula</h3>
						<Math formula='V =\pi\int_a^b[R^2-r^2]dx' />
					</Subject>
					<Subject subjectName='Area under the curve'>
						<Math formula='A = \int_a^b(high-low)' />
					</Subject>
					<Subject subjectName='Critical Points'>
						<h3>Steps</h3>
						<p>Derive the function and set it equal to zero, to find critical points.</p>
						<p>Critical Points exist when f'(c)=0 or f'(c)=undefined.</p>
					</Subject>
					<Subject subjectName='Point-Slope Form'>
						<Math formula='y-y_1=m\left(x-x_1\right)' />
					</Subject>
					<Subject subjectName='Slope'>
						<Math formula='m=\frac{(y_2-y_1)}{(x_2-x_1)}' />
						<Math formula='m=\frac{rise}{run}' />
					</Subject>
					<Subject subjectName='Average Value of A Set Of Numbers' subjectDesc='Function must be continuous'>
						<Math formula='average=\frac{1}{b-a}\int_a^bf(x)dx' />
					</Subject>
					<Subject subjectName='Integration Identities'>
						<Math formula='\int sin^2(x)dx = \int \frac{1-cos(2x)}{2}dx' />
						<Math formula='\int cos^2(x)dx = \int \frac{1+cos(2x)}{2}dx' />
						<Math formula='\int tan^2(x)dx = \int (sec^2(x)-1)dx = tan(x) - x + C' />
						<Math formula='\int cot^2(x)dx = \int (csc^2(x)-1)dx = -cot(x) - x + C' />
					</Subject>
					<Subject subjectName='Integration Tips'>
						<Math formula='\frac{1}{x^2+1}' />
						<p>Inverse Trig because of constant numerator.</p>
						<Math formula='\frac{x}{x^2+1}' />
						<p>U-Substitution when the denominator is 1 degree larger than numerator.</p>
						<Math formula='\frac{x^2}{x^2+1}' />
						<p>Long Division when degrees are the same or numerator &gt; denominator.</p>
						<Math formula='\frac{x+1}{x^2+1}' />
						<p>
							Numerator needs to have two terms but du/dx is 1 term. Split up into separate terms and use
							Tip #1 and Tip #2.
						</p>
					</Subject>
					<Subject subjectName='Integration Rules (Anti-derivatives)'>
						<Math formula='\int 0dx=C' />
						<Math formula='\int kdx=kx+C' />
						<Math formula='\int kf\left(x\right)dx=k\int f\left(x\right)dx' />
						<Math formula='\int kdx=kx+C' />
						<Math formula='\int kf\left(x\right)dx=k\int f\left(x\right)dx' />
						<Math formula='\int f\left(x\right)\pm g\left(x\right)dx=\int f\left(x\right)dx \pm\int g\left(x\right)dx' />
						<Math formula='\int x^ndx=\frac{x^{n+1}}{\left(n+1\right)} + C' />
						<Math formula='\int \cos\left(x\right)dx = \sin\left(x\right) + C' />
						<Math formula='\int \sin\left(x\right)dx = -\cos\left(x\right) + C' />
						<Math formula='\int \sec^2\left(x\right)dx = \tan\left(x\right) + C' />
						<Math formula='\int \sec\left(x\right)tan\left(x\right)dx = \sec\left(x\right) + C' />
						<Math formula='\int \csc^2\left(x\right)dx = -cot\left(x\right) + C' />
						<Math formula='\int \csc\left(x\right)cot\left(x\right)dx = -\csc\left(x\right) + C' />
						<Math formula='\int \frac{1}{u}dx = \ln|u| + C' />
						<Math formula='\int \tan\left(x\right)dx = -\ln|\cos(x)| + C' />
						<Math formula='\int \cot\left(x\right)dx = \ln|\sin\left(x\right)| + C' />
						<Math formula='\int \sec\left(x\right)dx = \ln|\sec\left(x\right) + tan\left(x\right)| + C' />
						<Math formula='\int \csc\left(x\right)dx = -\ln|\csc\left(x\right) + \cot\left(x\right)| + C' />
						<Math formula='\int ke^udu = ke^u + C' />
						<Math formula='\int a^udu = \frac{a^u}{ln\left(a\right)} + C' />
						<Math formula='\int \frac{du}{\sqrt{a^2 - u^2}} = \arcsin \left(\frac{u}{a} \right) + C' />
						<Math formula='\int \frac{du}{a^2 + u^2} = \frac{1}{a}\arctan \left(\frac{u}{a} \right) + C' />
						<Math formula='\int \frac{du}{u\sqrt{u^2-a^2}} = \frac{1}{a}arcsec \left(\frac{u}{a} \right) + C' />
					</Subject>
					<Subject subjectName='Derivative Rules'>
						<Math formula='\frac{d}{dx}\left(x\right) = 1' />
						<Math formula='\frac{d}{dx}\sin\left(x\right) = cos\left(x\right)' />
						<Math formula='\frac{d}{dx}\cos\left(x\right) = -sin\left(x\right)' />
						<Math formula='\frac{d}{dx}\tan\left(x\right) = sec^2\left(x\right)' />
						<Math formula='\frac{d}{dx}\sec\left(x\right) = sec\left(x\right)tan\left(x\right)' />
						<Math formula='\frac{d}{dx}\csc\left(x\right) = -csc\left(x\right)cot\left(x\right)' />
						<Math formula='\frac{d}{dx}\cot\left(x\right) = -csc^2\left(x\right)' />
						<Math formula='\frac{d}{dx}\sin^{-1}x = \frac{1}{\sqrt{1-x^2}}' />
						<Math formula='\frac{d}{dx}\cos^{-1}x = -\frac{1}{\sqrt{1-x^2}}' />
						<Math formula='\frac{d}{dx}\tan^{-1}x = \frac{1}{1+x^2}' />
						<Math formula='\frac{d}{dx}a^x = a^x \ln\left(a\right)' />
						<Math formula='\frac{d}{dx}e^x = e^x' />
						<Math formula='\ln\left(x\right) = \frac{1}{x}, x > 0' />
						<Math formula='\frac{d}{dx}\ln|x| = \frac{1}{x}' />
						<Math formula='\log_a\left(x\right) = \frac{1}{x\ln\left(a\right)}' />
					</Subject>
					<Subject subjectName='Derivative Rules'>
						<h3>Chain Rule</h3>
						<Math formula='\frac{d}{dx}\left(f\left(g\left(x\right)\right)\right) = f\prime\left(g\left(x\right)\right)g\prime\left(x\right)' />
						<h3>Power Rule</h3>
						<Math formula='\frac{d}{dx}\left(x^n\right) = nx^{n-1}' />
						<h3>Quotient Rule</h3>
						<Math formula='\frac{d}{dx}\left(\frac{f\left(x\right)}{g\left(x\right)}\right) = \frac{f\prime\left(x\right)g\left(x\right) - f\left(x\right)g\prime\left(x\right)}{[g\left(x\right)]^2}' />
						<h3>Product Rule</h3>
						<Math formula='\left(f\left(x\right)g\left(x\right)\right)\prime = f\prime\left(x\right)g\left(x\right) + f\left(x\right)g\prime\left(x\right)' />
					</Subject>
				</div>
			</body>
		</div>
	);
}

export default App;
