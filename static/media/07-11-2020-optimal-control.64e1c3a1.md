Optimal control problems consist of situations where an agent wants to minimize a cost by controlling
a controllable variable. For example, suppose a driver wants to move between two places and he/she wants to
minimize the vehicle fuel consumption as much as possible, while can control the speed and break through
the their corresponding pedals. Or suppose that an automatic software do this job. This can be
considered as a optimal control problem.

Let's try to formalize this example. Suppose <math>X(t)</math> denotes the
position of the agent (or its vehicle) at time <math>t</math>, where <math>t \in [0,T]</math>
for some positive number <math>T</math>. The dynamic of the problem will be

<Math> \mathrm{d} X(t) = v(t) \mathrm{d} t, \quad \mathrm{d} v(t) = a(t) \mathrm{d} t +\sigma\mathrm{d} B_t</Math>
<Math> |a| \leq a_{max} </Math>

<Code>let x = 1</Code>
