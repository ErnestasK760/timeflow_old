<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserListController extends AbstractController
{
    /**
     * @Route("/users", name="user_list")
     */
    public function list_index()
    {
        $users = ['Ernis','Gedis'];
        return $this->render('list/user_list.html.twig', [
            'users' => $users,
        ]);
    }
}