<?php
namespace App\Controller;

use App\Entity\User;
use ContainerNDuacmW\getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserListController extends AbstractController
{
    /**
     * @Route("/users", name="user_list")
     */
    public function list_index(EntityManagerInterface $doctrine)
    {
        $users = $doctrine->getRepository(User::class)->findAll();
        return $this->render('list/user_list.html.twig', [
            'users' => $users,
        ]);
    }
}