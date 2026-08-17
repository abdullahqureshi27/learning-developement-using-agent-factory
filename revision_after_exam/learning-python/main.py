def demo():
    print("Start")

    yield 1

    print("Middle")

    yield 2

    print("End")
d = demo()
print(next(d))
print(next(d)) 