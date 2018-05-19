var obj = {
    a: function() { console.log('a') },
    b: function() { console.log('b') },
    c: function() { return this.a() },
}

obj.a();
obj.b();
obj.c();