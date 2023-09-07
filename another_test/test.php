<div class="nav-item dropdown">
    <button class="nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="navbar-toggler-icon">
            <?php
                if (isset($_SESSION['email'])) {
                    // first letter capitalized
                    echo strtoupper(substr($_SESSION['email'], 0, 1));
                } else {
                    echo "Ö";
                }
            ?>
        </span>
    </button>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <?php if (isset($_SESSION['user_id'])) : ?>
            <a class="nav-link" href="/dashboard">Dashboard</a>
            <a class="nav-link" href="/ask">Create</a>
            <a class="nav-link" href="/ads">Create Ad</a>
            <a class="nav-link" href="/media">Media</a>
            <a class="nav-link" href="/account">Account</a>
            <a class="nav-link" href="/profile">Profile</a>
            <a class="nav-link" href="/logout">Logout</a></li>
        <?php else : ?>
            <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
        <?php endif; ?>
    </div>
</div>