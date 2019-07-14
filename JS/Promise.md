# Promise
Promise是一个对象，用来表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

本质上，Promise是一个绑定了回调的对象，而不是将回调传进函数内部。

大多数人仅仅是使用已经创建的Promise实例对象，来处理异步操作，而Promise的对象实例需要通过Promise构造函数来获得，然后**用来包装还未支持promises的函数**。

## Promise的构造函数

      new Promise( function(resolve, reject) {...} /*executor*/ );

executor是带有resolve和reject两个参数的函数，Promise构造函数执行时立即调用executor函数，resolve和reject两个函数作为参数传递给executor（executor函数在Promise构造函数返回缩减promise实例对象前被调用）。

resolve和reject函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。

executor内部通常会执行一些异步操作，一旦异步操作执行完毕（可能成功|失败）,要么调用resolve函数来将promise状态改成fulfilled，要么调用reject函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise状态为rejected。executor函数的返回值被忽略。

## Promise的状态

- pending：初始状态，既不是成功，也不是失败，是指在进行中
- fulfilled：操作成功状态
- rejected：操作失败状态

pending状态的Promise对象可能会变为fulfilled状态病传递一个值给相应的状态处理方法，有可能变为失败状态并传递失败信息。

当其中任一种情况出现时，Promise对象的then方法绑定的处理方法就会被调用（then方法包含两个参数：onfulfulled和onrejected，他们都是Function类型。当Promise状态为fulfulled时，调用then的onfulfilled方法，当Promise状态为rejected时，调用then的onrejected方法）

## 属性
- Promise.length 构造器参数的数目，其值总是为1
- Promise.prototype Promise构造器的原型

## 方法
- Promise.all(iterable)  
用于处理多个promise对象的状态集合，该函数返回一个新的promise对象，参数iterable是多个promise对象，当所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的额promise对象失败则立即触发该promise对象的失败。

如果是触发成功状态，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致。

如果这个新的promise对象触发的是失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
- Promise.race(iterable)  
当iterable参数里的任意一个子promise成功或失败后，父promise马上会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

- Promise.reject(reason)  
返回一个状态为失败的Promise对象，并将给定的失败信息传递给对相应的处理方法

- Promise.resolve(value)  
返回一个状态由给定value决定的Promise对象。如果你不知道一个值是否是Promise对象，使用Promise.resolve(value)来返回一个Promise对象，这样就能将该value以Promise对象形式使用。

以上方法均是静态方法，可以通过类直接使用

## Promise.prototype
表示Promise构造器的原型，Promise实例继承自Promise.prototype,可以在构造器的原型对象添加属性和方法到所有的Promise实例上。

原型对应的方法有：
- Promise.prototype.catch(onRejected)  
添加一个拒绝（rejection）回调到当前promise，返回一个新的promise。
- Promise.prototype.then(onFulfilled,onRejected)  
添加解决（fulfillment）和拒绝（rejection）回调到当前promise，返回一个新的promise，将以回调的返回值来resolve。
- Promise.prototype.finally(onFinally)  
添加一个事件处理回调于当前的promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成（fulfilled）还是失败（rejected）
