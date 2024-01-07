<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teachers List</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>

<body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid mt-5 px-4">
        @if (Session::has('error'))
            <div class="alert alert-danger solid alert-dismissible fade show">
                {{ Session::get('error') }}
            </div>
        @endif
        <form action="{{ route('teachers.update', $teacher->cin) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="row mt-2">
                <div class="col">
                    <label>CIN</label>
                </div>
                <div class="col">
                    <input type="text" name="cin" class="form-control" placeholder="Cin" readonly
                        value="{{ $teacher->cin }}">
                </div>
            </div>

            <div class="row mt-2">
                <div class="col">
                    <label>First name</label>
                </div>
                <div class="col">
                    <input type="text" name="first_name" class="form-control" placeholder="First name"
                        value="{{ $teacher->first_name }}">
                </div>
            </div>

            @error('first_name')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col">
                    <label>Last name</label>
                </div>
                <div class="col">
                    <input type="text" name="last_name" class="form-control" placeholder="Last name"
                        value="{{ $teacher->last_name }}">
                </div>
            </div>

            @error('last_name')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col">
                    <label>Phone number</label>
                </div>
                <div class="col">
                    <input type="text" name="phone_number" class="form-control" placeholder="Phone number"
                        value="{{ $teacher->phone_number }}">
                </div>
            </div>

            @error('phone_number')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col">
                    <label>Inscription date</label>
                </div>
                <div class="col">
                    <input type="date" name="date_inscription" class="form-control" placeholder="Date inscription"
                        value="{{ $teacher->date_inscription }}">
                </div>
            </div>

            @error('date_inscription')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col">
                    <label>Salary</label>
                </div>
                <div class="col">
                    <input type="text" name="salaire" class="form-control" placeholder="Salaire"
                        value="{{ $teacher->salaire }}">
                </div>
            </div>

            @error('salaire')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col">
                    <label>Email</label>
                </div>
                <div class="col">
                    <input type="text" name="email" class="form-control" placeholder="Email"
                        value="{{ $teacher->email }}">
                </div>
            </div>

            @error('email')
                <div class="row-mt-2">
                    <span class="text-danger">
                        {{ $message }}
                    </span>
                </div>
            @enderror

            <div class="row mt-2">
                <div class="col-sm-7">
                    <input type="submit" class="btn btn-primary" value="Edit">
                </div>
            </div>
        </form>
    </div>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
