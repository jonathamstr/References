##Default values are defined one during run time
args = (1,2)
kwargs = {
    'x':3,
    'y':4,
    'z':5
}
#Unpacking the arguments
func(*args,**kwargs)

def(maxsize,*,block=True)
#After the star you can only pass keyword arguments

#Closures Functiosn that return functions

def make_adder(x,y):
    def add():
        return x + y
    return add


class Spam:
    """docstring for thing."""
    a = 1 #Class variable
    def __init__(self, b):
        self.b = b #Instance variable
    def imethod(self):
        pass    #Instances Method
    @classmethod
    def cmethod(cls): #Class method that you use on a class
        pass

    @staticmethod #Static method, used on instance but it uses the class?
    def smethod():
        pass


#Special methods , magic methods or dunder methods
class Array:
    def __getitem__(self,index):
        pass

    def __setitem__(self,index,value):
        pass

    def __delitem__(self,index):
        pass

    def __contains__(self,item):
        pass

#pickling
import pickle

data = {'foo': [1, 2, 3],
        'bar': ('Hello', 'world!'),
        'baz': True}
jar = open('data.pkl', 'wb')
pickle.dump(data, jar) # write the pickled data to the file jar
jar.close()
pkl_file = open('data.pkl', 'rb') # connect to the pickled data
data = pickle.load(pkl_file) # load it into a variable
print data
pkl_file.close()

#inheeritance
class Base:
    def spam(self):
        pass

class Foo(Base):
    def spam(self):
        #Call method in base classmethod
        r =  super().spam()

#################################################################################################
#                                Decorators                                                     #
#################################################################################################

from functools import wraps

def debug(func):
    #func is functions to be wrapped
    @wraps(func)
    def wrapper(*args,**kwargs):
        print(func.__name__)
        return func(*args,**kwargs)
    return wrapper

def debug(func=None, *, prefix=''):
    if func is None:
        return partial(debug, prefix=prefix)

    msg = prefix + func.__qualname__
    @wraps(func)
    def wrapper(*args,**kwargs):
        print(msg)
        return func(*args,**kwargs)
    return wrapper

def debugmethods(cls):



####################################################################################################


#####################################################################################################
#                                      Super Init                                                   #
#####################################################################################################

class Structure:
    _fields = []
    def __init__(self,*args):
        for name,val in zip(self._fields,args):
            setattr(self,name,val)

class Stock(Structure):
    _fields = ['name','shares','price']

class Point(Structure):
    _fields = ['x','y']

class Address (Structure):
    _fields = ['hosntame','port']

########################################################################################################
